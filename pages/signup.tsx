import { useState } from "react";
import { useRouter } from "next/router";

const signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("api/newUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, username }),
    });

    if (response.ok) {
      router.push("api/auth/signin");
    } else {
      console.error("Sign-up failed");
    }
  };

  return (
    <div className="h-screen w-screen bg-blue-300">
      <div className="w-[89%] m-auto bg-white">
        <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
        <form onSubmit={handleSignup}>
          <input
            type="name"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full border border-blue-300 rounded-lg px-4 py-3 mb-4"
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-blue-300 rounded-lg px-4 py-3 mb-4"
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-blue-300 rounded-lg px-4 py-3 mb-4"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default signup;
