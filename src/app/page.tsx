import { Container } from '@/components/layout/Container';

// ============================================
// Homepage
// ============================================

export default function HomePage() {
  return (
    <Container>
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Welcome to my site
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Start building your site here. Edit src/app/page.tsx to get started.
        </p>
      </div>
    </Container>
  );
}
