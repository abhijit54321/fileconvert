import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/layout/Layout";

import HomePage from "@/pages/HomePage";
import AllToolsPage from "@/pages/AllToolsPage";
import ToolPage from "@/pages/ToolPage";
import BlogPage from "@/pages/BlogPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import FAQPage from "@/pages/FAQPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsPage from "@/pages/TermsPage";
import SearchPage from "@/pages/SearchPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/tools" component={AllToolsPage} />
        <Route path="/tools/:slug" component={ToolPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/privacy" component={PrivacyPolicyPage} />
        <Route path="/terms" component={TermsPage} />
        <Route path="/search" component={SearchPage} />
        {/* Basic catch-all for blog articles */}
        <Route path="/blog/:slug" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="fileconvert-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
