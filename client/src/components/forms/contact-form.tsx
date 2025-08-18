import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PlaneTakeoff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { StickyNoteButton } from "@/components/ui/sticky-note-button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  category: z.string().min(1, "Please select a category"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const categories = [
  { value: "reader", label: "Reader" },
  { value: "press", label: "Press/Media" },
  { value: "collaboration", label: "Collaboration Inquiry" },
  { value: "schools", label: "School/Education" },
  { value: "other", label: "Other" },
];

export default function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent! 📬",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact-submissions"] });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Oops!",
        description: "Something went wrong. Please try again.",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-handwritten text-xl text-diary-charcoal">Name</FormLabel>
                  <FormControl>
                    <Input
                      className="px-4 py-3 border-2 border-diary-lines rounded-lg focus:border-diary-purple focus:outline-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-handwritten text-xl text-diary-charcoal">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="px-4 py-3 border-2 border-diary-lines rounded-lg focus:border-diary-purple focus:outline-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-handwritten text-xl text-diary-charcoal">I'm a...</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="px-4 py-3 border-2 border-diary-lines rounded-lg focus:border-diary-purple focus:outline-none">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-handwritten text-xl text-diary-charcoal">Message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={6}
                    placeholder="Tell me what's on your mind..."
                    className="px-4 py-3 border-2 border-diary-lines rounded-lg focus:border-diary-purple focus:outline-none resize-none"
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
              className="text-xl px-8 py-4"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Sending..." : "Send Message"}
              <PlaneTakeoff className="ml-2" size={16} />
            </StickyNoteButton>
          </div>
        </form>
      </Form>
    </div>
  );
}
