import { Shield, FileText } from "lucide-react";

export default function Legal() {
  return (
    <div className="lined-paper margin-line">
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-handwritten text-4xl text-center text-diary-charcoal mb-12">
            Legal Stuff
            <Shield className="inline ml-3 text-diary-purple" size={36} />
          </h1>
          
          <div className="space-y-12">
            {/* Privacy Policy */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FileText className="text-diary-red mr-3" size={24} />
                <h2 className="font-handwritten text-3xl text-diary-charcoal">Privacy Policy</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-diary-charcoal/80">
                <p className="mb-4">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                
                <h3 className="font-handwritten text-2xl text-diary-purple mb-3">What We Collect</h3>
                <ul className="mb-6">
                  <li>Email addresses when you sign up for our newsletter</li>
                  <li>Names when provided voluntarily through contact forms</li>
                  <li>Messages sent through our contact form</li>
                  <li>Basic website analytics (anonymous usage data)</li>
                </ul>
                
                <h3 className="font-handwritten text-2xl text-diary-purple mb-3">How We Use Your Information</h3>
                <ul className="mb-6">
                  <li>To send you free chapters and book updates</li>
                  <li>To respond to your messages and inquiries</li>
                  <li>To improve our website and content</li>
                  <li>To comply with legal obligations</li>
                </ul>
                
                <h3 className="font-handwritten text-2xl text-diary-purple mb-3">Your Rights</h3>
                <p className="mb-4">
                  You can unsubscribe from our emails at any time using the link in any email. 
                  You can also contact us to request deletion of your personal data.
                </p>
                
                <h3 className="font-handwritten text-2xl text-diary-purple mb-3">Contact</h3>
                <p>
                  Questions about privacy? Email us at hello@theblendeddiaries.com
                </p>
              </div>
            </div>
            
            {/* Terms of Service */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FileText className="text-diary-purple mr-3" size={24} />
                <h2 className="font-handwritten text-3xl text-diary-charcoal">Terms of Service</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-diary-charcoal/80">
                <p className="mb-4">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                
                <h3 className="font-handwritten text-2xl text-diary-red mb-3">Website Use</h3>
                <p className="mb-4">
                  This website is provided for entertainment and informational purposes. 
                  The content reflects our personal experiences and should not be considered professional advice.
                </p>
                
                <h3 className="font-handwritten text-2xl text-diary-red mb-3">Content & Copyright</h3>
                <ul className="mb-6">
                  <li>All book content, text, and original images are copyrighted</li>
                  <li>You may share excerpts with proper attribution</li>
                  <li>Commercial use requires written permission</li>
                </ul>
                
                <h3 className="font-handwritten text-2xl text-diary-red mb-3">Purchases</h3>
                <p className="mb-4">
                  Book purchases are handled through Amazon KDP and Etsy. 
                  Returns and refunds are subject to their respective policies.
                </p>
                
                <h3 className="font-handwritten text-2xl text-diary-red mb-3">Limitation of Liability</h3>
                <p className="mb-4">
                  We're just sharing our family stories. Any resemblance to your own chaos is purely coincidental 
                  (but probably inevitable in blended families).
                </p>
                
                <h3 className="font-handwritten text-2xl text-diary-red mb-3">Changes</h3>
                <p>
                  We may update these terms occasionally. We'll post any changes here and update the date above.
                </p>
              </div>
            </div>
            
            {/* Fun disclaimer */}
            <div className="bg-diary-yellow/20 p-6 rounded-xl border-4 border-dashed border-diary-yellow text-center transform -rotate-1">
              <p className="font-handwritten text-xl text-diary-charcoal">
                📝 Disclaimer: No actual teenagers were harmed in the making of these diaries. 
                Emotional damage to parents was entirely self-inflicted.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
