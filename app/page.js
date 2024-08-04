import { redirect } from "next/navigation"
import { cookies } from "next/headers";
export default async function Home() {
  const cookieStore = cookies();
  const cookieDong = cookieStore.get('selectedDong')?.value || '방학3동';
  const encodeDong = encodeURIComponent(cookieDong);
  redirect(`/current/${encodeDong}`);
  return <h1>main</h1>
}