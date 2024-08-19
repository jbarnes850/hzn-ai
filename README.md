# AI + HZN: NEAR AI Incubation Program

NEAR is the ecosystem that enables User-Owned AI. The AI + HZN Incubation program is designed for early-stage AI projects building at the intersection of AI and Web3. This codebase is the website for the program and is built with Next.js, Tailwind CSS, and TypeScript.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The main components of the application are:

- `src/app/page.tsx`: The main page component with tab navigation
- `src/app/components/header.tsx`: The header component with navigation links
- `src/app/components/landingpage.tsx`: The landing page component
- `src/app/components/whyhzn.tsx`: Component explaining the benefits of HZN
- `src/app/components/programdetails.tsx`: Details about the incubation program
- `src/app/components/getconnected.tsx`: Information on how to connect with the community
- `src/app/components/footer.tsx`: The footer component

## Features

- Responsive design using Tailwind CSS
- Component-based architecture for easy maintenance and scalability
- Integration with external links for program application and community engagement
- Dynamic content rendering for featured projects and speakers
- Custom SVG illustrations and icons

## Key Components

### WhyHZN

Highlights the key benefits of choosing HZN, including unmatched support, founder-friendly terms, and strategic ecosystem integration.

### ProgramDetails

Provides comprehensive information about the incubation program, including start dates, time commitment, and profiles of previous founders. It also showcases featured AI projects and previous speakers.

### GetConnected

Offers various ways for users to connect with the NEAR AI community, including office hours, Telegram community, and developer resources.

## Deployment

This project is configured for deployment on Vercel. The `package.json` file includes the necessary scripts for building and starting the application.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [NEAR Protocol](https://near.org/)

## Contributing

Contributions to improve the AI + HZN website are welcome. Please ensure to follow the existing code style and component structure when adding new features or making changes.
