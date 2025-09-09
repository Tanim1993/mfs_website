import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertSupportTicketSchema } from "@shared/schema";
import { supportOptions } from "@/lib/data";
import { ChevronDown, ChevronRight, Phone, MessageCircle, Mail, TriangleAlert } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { Faq, InsertSupportTicket } from "@shared/schema";

export function FaqSection() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: faqs = [], isLoading } = useQuery<Faq[]>({
    queryKey: ["/api/faqs"],
  });

  const form = useForm<InsertSupportTicket>({
    resolver: zodResolver(insertSupportTicketSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const createTicketMutation = useMutation({
    mutationFn: async (data: InsertSupportTicket) => {
      const response = await apiRequest("POST", "/api/support-tickets", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Support ticket created",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/support-tickets"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create support ticket. Please try again.",
        variant: "destructive",
      });
    },
  });

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  const onSubmit = (data: InsertSupportTicket) => {
    createTicketMutation.mutate(data);
  };

  return (
    <section className="py-20 bg-gray-50" data-testid="support-faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">We're Here to Help</h2>
          <p className="text-xl text-gray-600">24/7 customer support in Bengali and English</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Options */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Get Support</h3>

            <div className="space-y-6 mb-8">
              {supportOptions.map((option, index) => (
                <Card 
                  key={index} 
                  className={`border-l-4 ${option.borderColor} border-t-0 border-r-0 border-b-0 shadow-md`}
                  data-testid={`support-option-${index}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${option.bgColor} rounded-xl flex items-center justify-center`}>
                        <i className={`${option.icon} text-white`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{option.title}</h4>
                        <p className="text-gray-600">{option.description}</p>
                        <p className="text-sm text-gray-500">{option.subtitle}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Support */}
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-red-800 mb-2 flex items-center space-x-2">
                  <TriangleAlert className="h-5 w-5" />
                  <span>Emergency Support</span>
                </h4>
                <p className="text-red-700 text-sm mb-3">For urgent issues like unauthorized transactions:</p>
                <p className="font-semibold text-red-800">Call: 09666-016247</p>
                <p className="text-red-600 text-sm">Available 24/7 for security concerns</p>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Send us a message</h4>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} data-testid="input-name" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} data-testid="input-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone (optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="+880 1XXX-XXXXXX" value={field.value || ""} onChange={field.onChange} onBlur={field.onBlur} name={field.name} data-testid="input-phone" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help?" {...field} data-testid="input-subject" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your issue or question..." 
                              rows={4} 
                              {...field} 
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-bangladesh-green hover:bg-green-700"
                      disabled={createTicketMutation.isPending}
                      data-testid="button-submit-support"
                    >
                      {createTicketMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Frequently Asked Questions</h3>

            <div className="space-y-4">
              {isLoading ? (
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-600">Loading FAQs...</p>
                  </CardContent>
                </Card>
              ) : (
                faqs.map((faq) => (
                  <Card key={faq.id} className="border border-gray-200" data-testid={`faq-${faq.id}`}>
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        data-testid={`button-faq-toggle-${faq.id}`}
                      >
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                        {expandedFaq === faq.id ? (
                          <ChevronDown className="h-5 w-5 text-bangladesh-green" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-bangladesh-green" />
                        )}
                      </button>
                      {expandedFaq === faq.id && (
                        <div className="px-6 pb-4" data-testid={`faq-answer-${faq.id}`}>
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))
              )}

              {!isLoading && faqs.length === 0 && (
                <Card>
                  <CardContent className="p-6 text-center">
                    <p className="text-gray-600">No FAQs available at the moment.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
