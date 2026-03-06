import { NextRequest, NextResponse } from 'next/server';
import { validateIdea } from '@/lib/aiEngine';

const MAX_IDEA_LENGTH = 2000;
const MIN_IDEA_LENGTH = 10;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { idea } = body;

    if (!idea || typeof idea !== 'string') {
      return NextResponse.json(
        { error: 'Invalid idea provided' },
        { status: 400 }
      );
    }

    const trimmed = idea.trim();

    if (trimmed.length < MIN_IDEA_LENGTH) {
      return NextResponse.json(
        { error: `Idea must be at least ${MIN_IDEA_LENGTH} characters` },
        { status: 400 }
      );
    }

    if (trimmed.length > MAX_IDEA_LENGTH) {
      return NextResponse.json(
        { error: `Idea must be at most ${MAX_IDEA_LENGTH} characters` },
        { status: 400 }
      );
    }

    const result = await validateIdea(trimmed);
    return NextResponse.json(result);
  } catch (error) {
    console.error('Validation error:', error);
    return NextResponse.json(
      { error: 'Failed to validate idea. Please try again.' },
      { status: 500 }
    );
  }
}
