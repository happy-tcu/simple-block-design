import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">BAKAME</div>
            <p className="text-sm text-muted-foreground">
              Voice-based educational platform for Rwandan students.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">How It Works</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Learning Modules</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">For Teachers</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">For Schools</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Contact Us</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +250 123 456 789
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@bakame.rw
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Kigali, Rwanda
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 BAKAME. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Made with ❤️ for Rwandan students</p>
        </div>
      </div>
    </footer>
  );
}
