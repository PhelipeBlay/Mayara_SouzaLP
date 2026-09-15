import { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { App } from "@/App";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Approach = lazy(() => import("@/pages/Approach"));
const Services = lazy(() => import("@/pages/Services"));
const Contact = lazy(() => import("@/pages/Contact"));
const Obrigado = lazy(() => import("@/pages/Obrigado"));
const Privacidade = lazy(() => import("@/pages/Privacidade"));

function PageFallback() {
  return (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="flex flex-col items-center gap-3 text-petrol-600">
        <span className="w-10 h-10 rounded-full border-2 border-blush-300 border-t-transparent animate-spin" />
        <span className="text-xs uppercase tracking-[0.32em] text-ink-soft">Carregando</span>
      </div>
    </div>
  );
}

function RootLayout() {
  return (
    <App>
      <Suspense fallback={<PageFallback />}>
        <Outlet />
      </Suspense>
    </App>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sobre", element: <About /> },
      { path: "/abordagem", element: <Approach /> },
      { path: "/servicos", element: <Services /> },
      { path: "/contato", element: <Contact /> },
      { path: "/obrigado", element: <Obrigado /> },
      { path: "/privacidade", element: <Privacidade /> },
      { path: "*", element: <Home /> },
    ],
  },
]);
