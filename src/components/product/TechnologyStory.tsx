'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';
import type { TechnologyFeature } from '@/lib/products';

interface TechnologyStoryProps {
  features: TechnologyFeature[];
  productName: string;
}

export default function TechnologyStory({ features, productName }: TechnologyStoryProps) {
  return (
    <section className="bg-warm-white">
      {/* Section header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pt-16 lg:pt-24 pb-8 lg:pb-12">
        <FadeIn>
          <Overline>The Construction</Overline>
          <h2 className="font-display text-[24px] lg:text-[32px] font-light text-ink mt-4 max-w-2xl">
            The details that disappear.
          </h2>
          <p className="font-body text-[15px] text-taupe mt-4 max-w-xl leading-relaxed">
            Each element resolved so nothing shows, nothing shifts, nothing presses.
            The result is the absence of the garment itself.
          </p>
        </FadeIn>
      </div>

      {/* Feature blocks — alternating layout */}
      <div className="max-w-[1440px] mx-auto">
        {features.map((feature, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={feature.number}
              className={`flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } border-t border-sand/60`}
            >
              {/* Image side */}
              {feature.image && (
                <FadeIn
                  direction={isEven ? 'left' : 'right'}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.headline}
                      fill
                      className="object-cover"
                      style={feature.imageObjectPosition ? { objectPosition: feature.imageObjectPosition } : undefined}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      unoptimized={feature.image.startsWith('/images/')}
                    />
                  </div>
                </FadeIn>
              )}

              {/* Text side */}
              <div className="w-full lg:w-1/2 flex items-center">
                <FadeIn className="px-6 lg:px-16 py-10 lg:py-16">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="inline-block font-display text-[48px] lg:text-[64px] font-light text-sand/80 leading-none"
                  >
                    {feature.number}
                  </motion.span>

                  <h3 className="font-display text-[22px] lg:text-[26px] font-light text-ink mt-3">
                    {feature.headline}
                  </h3>
                  <p className="font-body text-[14px] text-taupe leading-relaxed mt-4 max-w-md">
                    {feature.description}
                  </p>
                </FadeIn>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom spacer */}
      <div className="h-16 lg:h-24" />
    </section>
  );
}
