import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function ProtectedStaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/hold-youth/staff/sign-in");
  }

  return <>{children}</>;
}