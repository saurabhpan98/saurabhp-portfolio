export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  details: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
