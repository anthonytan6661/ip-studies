import math01 from './math-topic-01-quadratics.json';
import math02 from './math-topic-02-inequalities-simultaneous.json';
import math03 from './math-topic-03-nature-of-roots.json';
import math04 from './math-topic-04-exponential-logarithms.json';
import math05 from './math-topic-05-functions-graphs.json';
import math06 from './math-topic-06-triangle-trig-bearings.json';
import math07 from './math-topic-07-circular-measure.json';
import math08 from './math-topic-08-trig-graphs.json';
import math09 from './math-topic-09-trig-equations-identities.json';
import math10 from './math-topic-10-further-trig-identities.json';
import math11 from './math-topic-11-polynomials-remainder-factor.json';
import math12 from './math-topic-12-partial-fractions.json';
import math13 from './math-topic-13-coordinate-geometry.json';

import chem01 from './chem-pillar-01-bonding-structure.json';
import chem02 from './chem-pillar-02-mole-stoichiometry.json';
import chem03 from './chem-pillar-03-acids-bases-salts.json';
import chem04 from './chem-pillar-04-metals-redox.json';

export const allQuizzes = [
  math01,
  math02,
  math03,
  math04,
  math05,
  math06,
  math07,
  math08,
  math09,
  math10,
  math11,
  math12,
  math13,
  chem01,
  chem02,
  chem03,
  chem04,
];

export const quizMetadata = allQuizzes.map(q => ({
  topicId: q.topicId,
  title: q.title,
  subject: q.subject,
  chapterRef: q.chapterRef,
  questionCount: q.questions.length,
}));

export function getQuizByTopicId(topicId) {
  return allQuizzes.find(q => q.topicId === topicId) || null;
}

export function getTopicsBySubject(subject) {
  if (!subject || subject === 'all') return allQuizzes;
  return allQuizzes.filter(q => q.subject === subject);
}

export default allQuizzes;
