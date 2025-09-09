import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data";

export function ServicesOverview() {
  return (
    <section className="py-20 bg-white" data-testid="services-overview">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="services-title">
            Complete Mobile Financial Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="services-description">
            Experience the full range of banking services right from your mobile phone. Fast, secure, and available 24/7.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card 
              key={service.id} 
              className={`bg-gradient-to-br ${service.color} hover:shadow-xl transition-all duration-300 group border-0`}
              data-testid={`service-card-${service.id}`}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className={`text-sm font-semibold ${service.iconBg.replace('bg-', 'text-')}`}>
                  Fee: {service.fee}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-bangladesh-green to-emerald-600 rounded-2xl p-8 text-white" data-testid="services-stats">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-total-transactions">
              <div className="text-3xl font-bold mb-2">৳9.9L Cr</div>
              <div className="text-green-100">Total Transactions</div>
            </div>
            <div data-testid="stat-registered-users">
              <div className="text-3xl font-bold mb-2">178.6M</div>
              <div className="text-green-100">Registered Users</div>
            </div>
            <div data-testid="stat-agent-network">
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-green-100">Agent Network</div>
            </div>
            <div data-testid="stat-availability">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Service Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
