import BugReport from "@/components/global/BugReport";
import Navbar from "@/components/global/Navbar";
import FormContainer from "@/components/pages/FormContainer";
import Container from "@/components/shared/Container";
import GeminiBadge from "@/components/shared/GeminiBadge";
import Header from "@/components/shared/Header";

export default async function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Container className="mt-40">
        <Header
          title="Studying Doesn't Have to be Boring!"
          description="Turn your notes and textbook into fun quizzes that can help you learn better and faster"
        />
      </Container>
      <FormContainer />
      <GeminiBadge />
      <BugReport />
    </main>
  );
}
