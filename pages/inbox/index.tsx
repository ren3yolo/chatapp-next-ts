import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Inbox() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user?.name) router.push("/");
  }, [session, router]);

  return <p>Hi {session?.user?.name} ! </p>;
}

export default Inbox;
