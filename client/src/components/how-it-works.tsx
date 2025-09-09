import { howItWorksSteps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50" data-testid="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How PayFlow Works</h2>
          <p className="text-xl text-gray-600">Getting started is easy. Follow these simple steps.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {howItWorksSteps.map((step) => (
              <div key={step.step} className="flex items-start space-x-4" data-testid={`step-${step.step}`}>
                <div className={`w-12 h-12 ${step.bgColor} text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Demo Phone */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Mobile financial services demonstration"
              className="rounded-2xl shadow-2xl"
              data-testid="demo-image"
            />

            {/* Floating Action Cards */}
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 flex items-center space-x-2" data-testid="ussd-indicator">
              <i className="fas fa-mobile-alt text-bangladesh-green"></i>
              <span className="text-sm font-semibold">USSD: *247#</span>
            </div>

            <div className="absolute bottom-4 left-4 bg-bangladesh-green text-white rounded-lg p-3" data-testid="balance-indicator">
              <div className="text-sm">Balance</div>
              <div className="text-xl font-bold">৳5,250</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
