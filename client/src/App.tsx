import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Books from "@/pages/books";
import BookDetail from "@/pages/book-detail";
import About from "@/pages/about";
import Freebies from "@/pages/freebies";
import Contact from "@/pages/contact";
import Legal from "@/pages/legal";
import Thanks from "@/pages/thanks";
import Subscribed from "@/pages/subscribed";
import ReviewRedirect from "@/pages/review";
import PumpkinReview from "@/pages/PumpkinReview";
import TaylorProduct from "@/pages/TaylorProduct";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/books" component={Books} />
          <Route path="/books/:slug" component={BookDetail} />
          <Route path="/about" component={About} />
          <Route path="/freebies" component={Freebies} />
          <Route path="/contact" component={Contact} />
          <Route path="/legal" component={Legal} />
          <Route path="/thanks" component={Thanks} />
          <Route path="/subscribed" component={Subscribed} />
          <Route path="/review" component={ReviewRedirect} />
          <Route path="/pumpkinreview" component={PumpkinReview} />
          <Route path="/taylor" component={TaylorProduct} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
