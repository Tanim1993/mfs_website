import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Smartphone } from "lucide-react";

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Find Agents", href: "/agents" },
    { name: "Support", href: "/support" },
    { name: "About", href: "/about" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "বাংলা" : "EN");
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50" data-testid="header">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-10 h-10 bg-bangladesh-green rounded-lg flex items-center justify-center">
                <Smartphone className="text-white h-5 w-5" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-bangladesh-green">PayFlow</h1>
                <p className="text-xs text-gray-500">MFS Bangladesh</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} data-testid={`link-${item.name.toLowerCase().replace(' ', '-')}`}>
                <span 
                  className={`text-gray-700 hover:text-bangladesh-green transition-colors cursor-pointer ${
                    location === item.href ? 'text-bangladesh-green font-semibold' : ''
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
              <button
                onClick={toggleLanguage}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  language === "EN"
                    ? "bg-bangladesh-green text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                data-testid="button-language-en"
              >
                EN
              </button>
              <button
                onClick={toggleLanguage}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  language === "বাংলা"
                    ? "bg-bangladesh-green text-white"
                    : "text-gray-600 hover:bg-gray-200"
                }`}
                data-testid="button-language-bn"
              >
                বাংলা
              </button>
            </div>

            <Button 
              className="bg-bangladesh-green text-white hover:bg-green-700"
              data-testid="button-download-app"
            >
              Download App
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-link-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    <span 
                      className={`block py-2 text-lg cursor-pointer ${
                        location === item.href 
                          ? 'text-bangladesh-green font-semibold' 
                          : 'text-gray-700 hover:text-bangladesh-green'
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
                
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">Language</span>
                    <button
                      onClick={toggleLanguage}
                      className="px-3 py-1 bg-bangladesh-green text-white rounded-full text-sm"
                      data-testid="mobile-button-language"
                    >
                      {language}
                    </button>
                  </div>
                  
                  <Button 
                    className="w-full bg-bangladesh-green text-white hover:bg-green-700"
                    data-testid="mobile-button-download-app"
                  >
                    Download App
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
