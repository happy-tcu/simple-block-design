import { BrutalistBlock } from "@/components/ui/brutalist-card";

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo */}
          <div>
            <BrutalistBlock className="inline-block px-4 py-2 mb-4">
              <span className="text-xl font-bold">BAKAME</span>
            </BrutalistBlock>
            <p className="text-sm opacity-70">
              Voice-based educational platform for Rwandan students.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">PLATFORM</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>How It Works</li>
              <li>Learning Modules</li>
              <li>For Teachers</li>
              <li>For Schools</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">SUPPORT</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">CONTACT</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>📞 +250 123 456 789</li>
              <li>✉️ info@bakame.rw</li>
              <li>📍 Kigali, Rwanda</li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-foreground mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-70">© 2024 BAKAME. All rights reserved.</p>
          <p className="text-sm opacity-70">Made with ❤️ for Rwandan students</p>
        </div>
      </div>
    </footer>
  );
}
