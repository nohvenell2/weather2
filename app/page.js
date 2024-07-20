import { redirect } from "next/navigation";
export default function Home(props) {
  redirect('/current');
  return null
}

