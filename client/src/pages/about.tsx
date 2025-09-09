import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { leadership, companyAchievements, awards } from "@/lib/data";
import { Users, Target, Eye, Trophy, Medal, Star } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50" data-testid="page-about">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-bangladesh-green to-emerald-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="about-hero-title">
                About PayFlow
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Founded in 2018, PayFlow has become one of Bangladesh's most trusted mobile financial service providers, 
                bringing banking services to millions of unbanked citizens across the country.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-12">
                {companyAchievements.map((achievement, index) => (
                  <Badge 
                    key={index} 
                    className="bg-white bg-opacity-20 text-white p-4 text-lg border-0"
                    data-testid={`achievement-${index}`}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold">{achievement.value}</div>
                      <div className="text-sm">{achievement.label}</div>
                    </div>
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-xl text-gray-600 mb-8">
                  PayFlow was born from a simple vision: to make financial services accessible to every person in Bangladesh, 
                  regardless of their location or economic background. Starting with just a handful of agents in Dhaka, 
                  we've grown to serve over 10 million customers across all 64 districts.
                </p>

                {/* Mission & Vision */}
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-bangladesh-green rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-bangladesh-green mb-2">Our Mission</h3>
                      <p className="text-gray-600">
                        To make financial services accessible, affordable, and secure for every person in Bangladesh, 
                        regardless of their location or economic background.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-trust-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-trust-blue mb-2">Our Vision</h3>
                      <p className="text-gray-600">
                        A cashless Bangladesh where everyone has access to digital financial services, 
                        fostering economic growth and financial inclusion nationwide.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Achievements Grid */}
                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  {companyAchievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`text-center p-4 ${achievement.bgColor} rounded-xl`}
                      data-testid={`achievement-detail-${index}`}
                    >
                      <div className={`text-3xl font-bold ${achievement.textColor}`}>{achievement.value}</div>
                      <div className="text-gray-600">{achievement.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Image */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="PayFlow team working together in modern office"
                  className="rounded-2xl shadow-2xl w-full"
                  data-testid="office-image"
                />

                {/* Awards and Recognition */}
                <Card className="mt-8 border-0 shadow-lg">
                  <CardContent className="p-6 bg-gray-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-4">Awards & Recognition</h4>
                    <div className="space-y-3">
                      {awards.map((award, index) => (
                        <div key={index} className="flex items-center space-x-3" data-testid={`award-${index}`}>
                          <i className={`${award.icon} ${award.color}`}></i>
                          <span className="text-gray-700 text-sm">{award.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600">Meet the visionaries leading PayFlow's mission</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow" data-testid={`leader-${index}`}>
                  <CardContent className="p-8">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="text-xl font-semibold text-gray-900">{leader.name}</h4>
                    <p className="text-bangladesh-green font-medium mb-2">{leader.position}</p>
                    <p className="text-gray-600 text-sm">{leader.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-bangladesh-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer First</h3>
                  <p className="text-gray-600 text-sm">Every decision we make puts our customers' needs at the center</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-trust-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-shield-alt text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Security & Trust</h3>
                  <p className="text-gray-600 text-sm">We maintain the highest standards of security and transparency</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-lightbulb text-white text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-gray-600 text-sm">We continuously innovate to improve financial access for all</p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-golden-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-heart text-bangladesh-green text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Impact</h3>
                  <p className="text-gray-600 text-sm">We're committed to positive social and economic impact</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">Key milestones in PayFlow's growth</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start space-x-4" data-testid="timeline-2018">
                  <div className="w-12 h-12 bg-bangladesh-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2018</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">PayFlow Founded</h3>
                    <p className="text-gray-600">Started operations with 100 agents in Dhaka and Chittagong</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="timeline-2019">
                  <div className="w-12 h-12 bg-trust-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2019</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile App Launch</h3>
                    <p className="text-gray-600">Launched Android app and expanded to 20 districts</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="timeline-2020">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2020</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Nationwide Coverage</h3>
                    <p className="text-gray-600">Achieved coverage in all 64 districts of Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="timeline-2022">
                  <div className="w-12 h-12 bg-golden-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-bangladesh-green font-bold text-sm">2022</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">10 Million Customers</h3>
                    <p className="text-gray-600">Reached 10 million active users milestone</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="timeline-2024">
                  <div className="w-12 h-12 bg-crimson-red rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2024</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Leading MFS Provider</h3>
                    <p className="text-gray-600">Became one of the top 3 MFS providers in Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Visit our offices or contact us for partnerships and inquiries</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Head Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <i className="fas fa-map-marker-alt text-bangladesh-green mt-1"></i>
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p className="text-gray-600">PayFlow Tower, Gulshan-2<br />Dhaka-1212, Bangladesh</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-phone text-bangladesh-green"></i>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">+880-2-55668899</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="fas fa-envelope text-bangladesh-green"></i>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">info@payflow.com.bd</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Business Hours</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold text-gray-900">Closed</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-gray-600 mb-4">For customer support:</p>
                    <div className="bg-bangladesh-green text-white p-4 rounded-lg text-center">
                      <p className="font-semibold">24/7 Customer Hotline</p>
                      <p className="text-2xl font-bold">16247</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
