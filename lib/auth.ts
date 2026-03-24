import { supabase } from "./supabase";

export interface User {
  id: number;
  email: string;
  name: string;
}

/** 회원가입: user 테이블에 직접 INSERT */
export async function signUp(email: string, password: string, name: string): Promise<User> {
  // 이메일 중복 확인
  const { data: existing } = await supabase
    .from("user")
    .select("id")
    .eq("email", email)
    .single();

  if (existing) {
    throw new Error("이미 사용 중인 이메일입니다.");
  }

  const { data, error } = await supabase
    .from("user")
    .insert({ email, password, name })
    .select("id, email, name")
    .single();

  if (error || !data) {
    throw new Error(error?.message ?? "회원가입에 실패했습니다.");
  }

  return data as User;
}

/** 로그인: email + password 일치하는 row 조회 */
export async function logIn(email: string, password: string): Promise<User> {
  const { data, error } = await supabase
    .from("user")
    .select("id, email, name")
    .eq("email", email)
    .eq("password", password)
    .single();

  if (error || !data) {
    throw new Error("이메일 또는 비밀번호가 올바르지 않습니다.");
  }

  return data as User;
}
