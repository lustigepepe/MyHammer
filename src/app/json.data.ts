export class Job {
  title: string;
  city: string;
  description: string;
  end_date: string;
  created_at: string;
}

export class JsonClass {
  id: number;
  name: string;
  errno: number;
  error: string;
  body: Array<Job>;
}