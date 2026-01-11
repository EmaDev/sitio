import CreateLogForm from '@/components/forms/create-log-form';
import PinProtection from '@/components/forms/pin-protection';

export default function CreatePage() {
  const CORRECT_PIN = "2024";

  return (
    <>
      <main className="container mx-auto max-w-4xl px-4 py-12">
        <PinProtection correctPin={CORRECT_PIN}>
          <div className="space-y-4 text-center mb-12">
              <h1 className="font-headline text-4xl md:text-5xl font-bold">Create a New Travel Log</h1>
              <p className="text-lg text-muted-foreground">
                  Fill in the details of your adventure.
              </p>
          </div>
          <CreateLogForm />
        </PinProtection>
      </main>
    </>
  );
}
