'use client'

import { useState, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import DesignElement from './DesignElement';
import Markdown from 'markdown-to-jsx';

export default function CardGrid({ cardData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
      {cardData.map((card, index) => {
        const [triggerRotation, setTriggerRotation] = useState(false);

        return (
          <Card 
            key={index} 
            className="p-4 border-l-0 border-orange-600 border-t-0 border-r-0 border-b-0 rounded-none shadow-none"
            onMouseEnter={() => setTriggerRotation(true)}
            onMouseLeave={() => setTriggerRotation(false)}
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <DesignElement triggerRotation={triggerRotation} />
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Markdown>{'<p>' + card.content + '</p>'}</Markdown>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}