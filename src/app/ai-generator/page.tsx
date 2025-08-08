import { AboutMeGeneratorForm } from './form';

export default function AIGeneratorPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 md:py-24">
      <div className="space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
          Generador de "Sobre Mí" con IA
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
          Introduce tu experiencia y deja que la IA cree una biografía profesional para tu portafolio.
        </p>
      </div>
      <AboutMeGeneratorForm />
    </div>
  );
}
