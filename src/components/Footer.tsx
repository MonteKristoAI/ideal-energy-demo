"use client";
export function Footer() {
  return (
    <footer className="bg-[#151515] border-t border-white/10 pt-24 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-heading text-white tracking-wide mb-6">
              IDEAL ENERGY<span className="text-yellow-400">.</span>
            </h2>
            <p className="text-white/40 font-light leading-relaxed max-w-sm mb-8">
              Pioneering the commercial transition. We engineer complex energy systems that transform liabilities into guaranteed revenue streams.
            </p>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                <a key={social} href="#" className="text-white/30 hover:text-yellow-400 transition-colors text-sm uppercase tracking-widest font-semibold">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-6">Services</h4>
              <ul className="space-y-4">
                {['Energy Procurement', 'Cost Reduction', 'System Engineering', 'Battery Storage', 'Carbon Offset'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/50 hover:text-white transition-colors font-light text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-6">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Our Methodology', 'Insights & News', 'Careers', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={link === 'Contact' ? '/contact' : link === 'About Us' ? '/about' : '#'} className="text-white/50 hover:text-white transition-colors font-light text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-6">Legal</h4>
              <ul className="space-y-4">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/50 hover:text-white transition-colors font-light text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/30 text-sm font-light">
            © {new Date().getFullYear()} Ideal Energy LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-sm font-light">
            <span>Built by</span>
            <span className="text-white font-medium uppercase tracking-widest text-xs">Monte Kristo Devs</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
