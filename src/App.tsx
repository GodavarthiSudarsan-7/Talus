import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Challenges from "./pages/Challenges";
import Blog from "./pages/Blog";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import LoginContributor from "./pages/auth/LoginContributor";
import LoginCorporate from "./pages/auth/LoginCorporate";
import Signup from "./pages/auth/Signup";
import SignupContributor from "./pages/auth/SignupContributor";
import SignupCorporate from "./pages/auth/SignupCorporate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/contributor" element={<LoginContributor />} />
          <Route path="/login/corporate" element={<LoginCorporate />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/contributor" element={<SignupContributor />} />
          <Route path="/signup/corporate" element={<SignupCorporate />} />
          <Route path="/about" element={<About />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
