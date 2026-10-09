export interface CourseModule {
  id: number;
  title: string;
  subtitle: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  duration: string;
  mode: string;
  fee: number | null; // null if contact for details
  feeDisplay: string;
  internshipAvailable: boolean;
  internshipFee: number | null;
  curriculum: CourseModule[];
  highlights: string[];
  prerequisites: string;
  whoIsThisFor: string[];
  inquiryMessage: string;
}

export interface ContactFormData {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  courseInterested: string;
  internshipRequired: 'Yes' | 'No';
  message: string;
}
