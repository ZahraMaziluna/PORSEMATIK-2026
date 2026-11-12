import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventPage from "@/components/event/EventPage";
import PixelDivider from "@/components/layout/PixelDivider";
import { EVENTS, getEvent } from "@/data/competition-details";

export function generateStaticParams() {
  return EVENTS.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return {};
  return { title: event.name, description: event.tagline };
}

export default async function KompetisiDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <>
      <EventPage event={event} />
      <PixelDivider color="#1E293B" background="#EAF0F6" />
    </>
  );
}
