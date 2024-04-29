import Navbar from "@/components/global/Navbar";
import FormWidget from "@/components/pages/FormWidget";
import Container from "@/components/shared/Container";
import FormContainer from "@/components/shared/FormContainer";
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Container className="mt-40">
        <Header
          title="Studying Doesn't Have to be Boring!"
          description="Turn your notes and textbook into fun quizzes that can help you learn better and faster"
        />
      </Container>
      <FormContainer>
        <header className="text-center mb-4">
          <h2 className="text-lg font-semibold mb-1">Add Notes</h2>
          <p className="text-xs text-zinc-400">
            Paste your notes as text or upload a file
          </p>
        </header>
        <FormWidget />
      </FormContainer>

      <FormContainer>
        <header className="text-center mb-4">
          <h2 className="text-lg font-semibold mb-1">Customize Options</h2>
          <p className="text-xs text-zinc-400">
            Set the parameters of the generator
          </p>
        </header>

        <div className="flex items-center justify-between gap-x-2 mb-8">
          <p className="text-sm">Select difficulty level</p>

          <select
            className="bg-white text-sm"
            name="difficulty"
            id="difficulty"
          >
            <option value="easy">Easy</option>
            <option value="regular">Regular</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="flex items-center justify-between gap-x-2 mb-8">
          <p className="text-sm">How many quizzes do you want to generate?</p>

          <select
            className="bg-white text-sm"
            name="quiz-count"
            id="quiz-count"
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </FormContainer>
    </div>
  );
}
