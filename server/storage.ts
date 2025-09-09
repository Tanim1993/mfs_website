import { type User, type InsertUser, type Agent, type InsertAgent, type SupportTicket, type InsertSupportTicket, type Faq, type InsertFaq } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Agent methods
  getAgents(): Promise<Agent[]>;
  getAgentsByLocation(district?: string, division?: string): Promise<Agent[]>;
  getAgent(id: string): Promise<Agent | undefined>;
  createAgent(agent: InsertAgent): Promise<Agent>;
  
  // Support ticket methods
  getSupportTickets(): Promise<SupportTicket[]>;
  createSupportTicket(ticket: InsertSupportTicket): Promise<SupportTicket>;
  
  // FAQ methods
  getFaqs(): Promise<Faq[]>;
  getFaqsByCategory(category: string): Promise<Faq[]>;
  createFaq(faq: InsertFaq): Promise<Faq>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private agents: Map<string, Agent>;
  private supportTickets: Map<string, SupportTicket>;
  private faqs: Map<string, Faq>;

  constructor() {
    this.users = new Map();
    this.agents = new Map();
    this.supportTickets = new Map();
    this.faqs = new Map();
    
    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Sample agents
    const sampleAgents: Agent[] = [
      {
        id: randomUUID(),
        name: "Rahman Mobile Shop",
        address: "Shop #123, Dhanmondi Road 15, Dhaka-1209",
        phone: "+880 1712-345678",
        district: "Dhaka",
        division: "Dhaka",
        latitude: "23.7461",
        longitude: "90.3742",
        services: ["Cash In/Out", "Registration", "Bill Payment"],
        openTime: "8:00 AM",
        closeTime: "10:00 PM",
        isActive: true,
      },
      {
        id: randomUUID(),
        name: "Alam Telecom Center",
        address: "Building A-5, Mirpur DOHS, Dhaka-1216",
        phone: "+880 1987-654321",
        district: "Dhaka",
        division: "Dhaka",
        latitude: "23.8041",
        longitude: "90.3652",
        services: ["Cash In/Out", "Bill Payment"],
        openTime: "9:00 AM",
        closeTime: "9:00 PM",
        isActive: true,
      },
      {
        id: randomUUID(),
        name: "Khan Communication",
        address: "Market Road, Chittagong-4000",
        phone: "+880 1555-123456",
        district: "Chittagong",
        division: "Chittagong",
        latitude: "22.3569",
        longitude: "91.7832",
        services: ["Cash In/Out", "Registration", "Bill Payment", "Mobile Recharge"],
        openTime: "8:00 AM",
        closeTime: "10:00 PM",
        isActive: true,
      },
    ];

    sampleAgents.forEach(agent => this.agents.set(agent.id, agent));

    // Sample FAQs
    const sampleFaqs: Faq[] = [
      {
        id: randomUUID(),
        question: "How do I register for PayFlow?",
        answer: "Visit any PayFlow agent with your National ID and mobile number. Registration is free and takes only 2 minutes. You'll receive an SMS confirmation once your account is active.",
        category: "Registration",
        priority: 1,
      },
      {
        id: randomUUID(),
        question: "What are the transaction fees?",
        answer: "Cash in/out: ৳5-15, Send money: ৳5, Bill payment: ৳2-10, Bank transfer: ৳10-20. Exact fees depend on transaction amount. Check our fee calculator for precise costs.",
        category: "Fees",
        priority: 2,
      },
      {
        id: randomUUID(),
        question: "Is my money safe with PayFlow?",
        answer: "Yes, your money is completely safe. We use bank-grade 256-bit encryption, are regulated by Bangladesh Bank, and offer 100% money-back guarantee for unauthorized transactions.",
        category: "Security",
        priority: 3,
      },
      {
        id: randomUUID(),
        question: "Can I use PayFlow without internet?",
        answer: "Yes! You can use all PayFlow services through USSD by dialing *247# from any mobile phone. No internet connection required. The mobile app provides additional features when online.",
        category: "Usage",
        priority: 4,
      },
      {
        id: randomUUID(),
        question: "What if I forget my PIN?",
        answer: "Visit any PayFlow agent with your NID to reset your PIN, or call our customer service at 16247. For security, PIN reset requires identity verification and may take up to 24 hours to activate.",
        category: "Security",
        priority: 5,
      },
    ];

    sampleFaqs.forEach(faq => this.faqs.set(faq.id, faq));
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAgents(): Promise<Agent[]> {
    return Array.from(this.agents.values()).filter(agent => agent.isActive);
  }

  async getAgentsByLocation(district?: string, division?: string): Promise<Agent[]> {
    let agents = Array.from(this.agents.values()).filter(agent => agent.isActive);
    
    if (district) {
      agents = agents.filter(agent => 
        agent.district.toLowerCase().includes(district.toLowerCase())
      );
    }
    
    if (division) {
      agents = agents.filter(agent => 
        agent.division.toLowerCase().includes(division.toLowerCase())
      );
    }
    
    return agents;
  }

  async getAgent(id: string): Promise<Agent | undefined> {
    return this.agents.get(id);
  }

  async createAgent(insertAgent: InsertAgent): Promise<Agent> {
    const id = randomUUID();
    const agent: Agent = { 
      ...insertAgent,
      latitude: insertAgent.latitude || null,
      longitude: insertAgent.longitude || null,
      services: insertAgent.services || [],
      openTime: insertAgent.openTime || "8:00 AM",
      closeTime: insertAgent.closeTime || "10:00 PM",
      id, 
      isActive: true 
    };
    this.agents.set(id, agent);
    return agent;
  }

  async getSupportTickets(): Promise<SupportTicket[]> {
    return Array.from(this.supportTickets.values())
      .sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }

  async createSupportTicket(insertTicket: InsertSupportTicket): Promise<SupportTicket> {
    const id = randomUUID();
    const ticket: SupportTicket = { 
      ...insertTicket,
      phone: insertTicket.phone || null,
      id, 
      status: "open",
      createdAt: new Date()
    };
    this.supportTickets.set(id, ticket);
    return ticket;
  }

  async getFaqs(): Promise<Faq[]> {
    return Array.from(this.faqs.values())
      .sort((a, b) => (a.priority || 0) - (b.priority || 0));
  }

  async getFaqsByCategory(category: string): Promise<Faq[]> {
    return Array.from(this.faqs.values())
      .filter(faq => faq.category.toLowerCase() === category.toLowerCase())
      .sort((a, b) => (a.priority || 0) - (b.priority || 0));
  }

  async createFaq(insertFaq: InsertFaq): Promise<Faq> {
    const id = randomUUID();
    const faq: Faq = { 
      ...insertFaq, 
      priority: insertFaq.priority || null,
      id 
    };
    this.faqs.set(id, faq);
    return faq;
  }
}

export const storage = new MemStorage();
