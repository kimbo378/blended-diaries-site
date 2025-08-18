import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, PlaneTakeoff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { StickyNoteButton } from "@/components/ui/sticky-note-button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const emailSignupSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().optional(),
});

type EmailSignupForm = z.infer<typeof emailSignupSchema>;

export default function EmailSignup() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<EmailSignupForm>({
    resolver: zodResolver(emailSignupSchema),
    defaultValues: {
      email: "",
      firstName: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: EmailSignupForm) => {
      return apiRequest("POST", "/api/email-signup", data);
    },
    onSuccess: () => {
      toast({
        title: "Welcome to the family! 🎉",
        description: "Check your email for your free bonus chapter.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/email-signups"] });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "Something went wrong. Please try again.",
      });
      console.error("Email signup error:", error);
    },
  });

  const onSubmit = (data: EmailSignupForm) => {
    mutation.mutate(data);
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto border-4 border-dashed border-diary-purple">
      <div className="mb-8 text-center">
        <Mail className="mx-auto text-6xl text-diary-purple mb-4" size={64} />
        <h3 className="font-handwritten text-3xl text-diary-charcoal mb-4">Join the Family</h3>
        <p className="text-diary-charcoal/80">Free bonus chapter + behind-the-scenes chaos</p>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Your email address"
                    className="w-full px-4 py-3 border-2 border-diary-lines rounded-lg focus:border-diary-purple focus:outline-none text-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="First name (optional)"
                    className="w-full px-4 py-3 border-2 border-diary-lines rounded-lg focus:border-diary-purple focus:outline-none text-lg"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="text-center">
            <StickyNoteButton
              type="submit"
              color="red"
              className="text-xl px-8 py-4 w-full sm:w-auto"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Sending..." : "Send Me the Good Stuff!"}
              <PlaneTakeoff className="ml-2" size={16} />
            </StickyNoteButton>
          </div>
        </form>
      </Form>
      
      <p className="text-sm text-diary-charcoal/60 mt-6 text-center">
        Unsubscribe anytime. I promise I'm not that clingy.
      </p>
    </div>
  );
}
