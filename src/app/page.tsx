import Navbar from "@/components/global/Navbar";
import Form from "@/components/pages/Form";
import Container from "@/components/shared/Container";
import GeminiBadge from "@/components/shared/GeminiBadge";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Container className="mt-40">
        <Header
          title="Studying Doesn't Have to be Boring!"
          description="Turn your notes and textbook into fun quizzes that can help you learn better and faster"
        />
      </Container>
      <Form />
      <GeminiBadge />
    </main>
  );
}
