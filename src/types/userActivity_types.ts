export type UserActivityType = "login" | "order" | "review" | "payment";

export interface UserActivity {
  id: number;
  user_id: number;
  type: UserActivityType;
  description: string | null;
  created_at: string;
}

export interface CreateUserActivityInput {
  user_id: number | string;
  type: UserActivityType;
  description?: string;
}

export interface CreateUserActivityResponse {
  message: string;
  activityId: number;
}

export interface UserActivitiesResponse {
  activities: UserActivity[];
}
