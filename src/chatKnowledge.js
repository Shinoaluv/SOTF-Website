import { impactStats, links } from './data.js';

export const topics = [
  {
    id: 'about', title: 'About us', href: '/about',
    keywords: /\b(mission|about|who|founder|catherine|sanni|nonprofit|organization)\b/i,
    answer: 'Sound of the Future is a youth-led nonprofit focused on hearing-health education, prevention, advocacy, accessibility, and amplifying Deaf and hard-of-hearing voices. Catherine Lin (Co-Founder & CEO) and Sanni Arimanda (Co-Founder & COO) founded it after personal experiences with hearing loss inspired them to help their community.',
  },
  {
    id: 'impact', title: 'Our impact', href: '/impact',
    keywords: /\b(impact|impacted|reach|reached|many|statistic|accomplishment|raised|benevity)\b/i,
    answer: `Our organization-reported impact, updated October 2026: ${impactStats.map(([number, label]) => `${number} ${label}`).join('; ')}. These are separate measures, not totals to add together.`,
  },
  {
    id: 'packages', title: 'Care packages', href: '/programs',
    keywords: /\b(package|packages|distributed|earplug|earplugs)\b/i,
    answer: `We have distributed ${impactStats[1][0]} care packages. Our hearing-health care packages provide practical resources such as hearing-protection materials and educational guides about safe listening habits. For availability or requests, please contact our team.`,
  },
  {
    id: 'join', title: 'Earn service hours online', href: '/get-involved/service-hours',
    keywords: /\b(join|volunteer|volunteering|help|involved|sign up|signup)\b/i,
    answer: 'You can earn service hours online through Research Development, AI & Accessibility Innovation, or Journalism & Communications. Each opportunity earns 3 service hours. Research summaries are 200–500 words using 1–2 credible sources; accessibility volunteers test an approved tool and write an evaluation report; journalism articles are 500–800 words. Choose an approved topic or tool, cite sources where applicable, and submit completed work for review using the submission form on our online service hours page.',
  },
  {
    id: 'donate', title: 'Make a donation', href: links.donate,
    keywords: /\b(donate|donation|donations|give|money|fund|funding)\b/i,
    answer: 'Donations support educational resources, community outreach, hearing-health care packages, and youth leadership. Our official donation form is hosted on Zeffy. Please use that form for payment; do not share payment details in this chat.',
  },
  {
    id: 'outreach', title: 'Get involved', href: '/get-involved',
    keywords: /\b(branch|school|partner|partnership|workshop|ambassador|hospital|business)\b/i,
    answer: 'You can start a branch at your school or in your community, invite our team for a hearing-health workshop, or discuss a partnership. We work with schools, hospitals, nonprofits, businesses, and community organizations. Contact our team to discuss the next steps. Branch and ambassador application forms are linked on our Get Involved page. Email us for partnership or school visit information.',
  },
  {
    id: 'programs', title: 'Explore our programs', href: '/programs',
    keywords: /\b(program|programs|work|education|resource|resources|advocacy|accessibility)\b/i,
    answer: 'Our programs cover hearing-health education, community outreach, care packages, media and awareness, youth branches, and advocacy and representation. We share information through presentations, workshops, digital content, and school outreach.',
  },
  {
    id: 'podcast', title: 'Listen to our podcast', href: links.spotify,
    keywords: /\b(podcast|listen|spotify|iheart|youtube|media|instagram|social)\b/i,
    answer: 'The Sound of the Future Podcast shares hearing health, personal stories, and advocacy with 100+ weekly listeners. You can listen on Spotify, iHeartRadio, and YouTube, or follow our Instagram for updates.',
  },
  {
    id: 'contact', title: 'Contact our team', href: '/contact',
    keywords: /\b(contact|email|question|team|event|schedule|upcoming|request)\b/i,
    answer: 'Email soundofthefutureofficial@gmail.com to reach our team. For upcoming events, package requests, partnerships, or questions the website does not answer, the team can confirm the latest details.',
  },
];

export const welcome = 'Hi! I can help you explore Sound of the Future. Ask about our work, care packages, volunteering, or donating.';
export const suggestions = ['What is your impact?', 'How can I volunteer?', 'Tell me about care packages'];

export function websiteAnswer(question) {
  if (/\b(diagnos\w*|treat\w*|symptom\w*|pain|tinnitus|medical|hearing test|my hearing|hearing aid)\b/i.test(question)) {
    return { text: 'I can explain our organization’s work, but I cannot assess symptoms or give medical advice. Please speak with a qualified hearing-health professional about personal hearing concerns. Our team can help with questions about our educational programs.', sourceIds: ['programs', 'contact'] };
  }
  const matches = topics.filter(topic => topic.keywords.test(question));
  // Care packages and specific actions are more useful than a broad keyword match.
  const preferred = ['packages', 'donate', 'outreach', 'join', 'impact', 'podcast', 'programs', 'about', 'contact'];
  matches.sort((a, b) => preferred.indexOf(a.id) - preferred.indexOf(b.id));
  if (!matches.length) return { text: 'I don’t have that information in the website guide. I can help with our mission, programs, impact, volunteering, and donations. For other questions, please contact our team.', sourceIds: ['contact'] };
  return { text: matches[0].answer, sourceIds: [...new Set([matches[0].id, 'contact'])] };
}

export const knowledge = topics.map(({ title, answer, href }) => `${title}: ${answer}\nOfficial destination: ${href}`).join('\n\n');
