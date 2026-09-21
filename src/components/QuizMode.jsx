import React, { useState } from 'react';
import { Target, CheckCircle2, XCircle, AlertTriangle, RotateCcw, Award } from 'lucide-react';
import { quizQuestions } from '../data/quizData';

export default function QuizMode() {
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = quizQuestions.filter(q => {
    if (subjectFilter === 'all') return true;
    return q.subject === subjectFilter;
  });

  const q = questions[currentIdx];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === q.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Target className="w-5 h-5 text-rose-400" />
            Spot the Trap: Interactive Exam Simulator
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            RVHS Past Paper Traps & Cambridge Keyword Penalty Drills
          </p>
        </div>

        {/* Subject Filter Tabs */}
        {!isFinished && (
          <div className="flex items-center gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
            {[
              { id: 'all', label: 'All Traps' },
              { id: 'math', label: 'Math Only' },
              { id: 'chemistry', label: 'Chem Only' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setSubjectFilter(tab.id);
                  handleRestart();
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  subjectFilter === tab.id
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {isFinished ? (
        /* Results Card */
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
          <div className="w-20 h-20 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center mx-auto">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h4 className="text-2xl font-bold text-slate-100">Quiz Completed!</h4>
            <p className="text-sm text-slate-400 font-mono">
              You scored <span className="text-emerald-400 font-bold text-lg">{score}</span> out of <span className="font-bold text-slate-200">{questions.length}</span>
            </p>
          </div>

          <div className="p-4 bg-slate-950/80 rounded-2xl border border-slate-800 text-xs font-mono max-w-md mx-auto">
            {score === questions.length ? (
              <span className="text-emerald-300 font-bold">
                🏆 Outstanding! You spotted 100% of RVHS exam traps. You are in distinction territory!
              </span>
            ) : score >= questions.length * 0.7 ? (
              <span className="text-amber-300 font-bold">
                👍 Great job! Review the 1 or 2 traps you missed to lock in full marks.
              </span>
            ) : (
              <span className="text-rose-300 font-bold">
                ⚠️ Good diagnostic practice! Review the Spot the Trap warnings in the syllabus tab.
              </span>
            )}
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm font-bold inline-flex items-center gap-2 transition-colors"
          >
            <RotateCcw className="w-4 h-4" /> Retake Trap Quiz
          </button>
        </div>
      ) : (
        /* Active Question Card */
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl">
          {/* Progress header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 text-xs font-mono">
            <span className="text-slate-400">
              Question {currentIdx + 1} of {questions.length}
            </span>
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-0.5 rounded-full font-bold ${
                q.subject === 'math'
                  ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                  : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
              }`}>
                {q.subject.toUpperCase()} • {q.topic}
              </span>
              <span className="text-slate-400">Score: {score}</span>
            </div>
          </div>

          {/* Question text */}
          <div className="space-y-2">
            <h4 className="text-lg md:text-xl font-bold text-slate-100 leading-snug">
              {q.question}
            </h4>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {q.options.map((option, idx) => {
              let optionClass = "bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-200";

              if (isAnswered) {
                if (idx === q.correctAnswer) {
                  optionClass = "bg-emerald-950/40 border-emerald-500 text-emerald-200 font-semibold";
                } else if (idx === selectedOption) {
                  optionClass = "bg-rose-950/40 border-rose-500 text-rose-200";
                } else {
                  optionClass = "bg-slate-950/30 border-slate-900 text-slate-500";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl border text-left text-sm md:text-base transition-all duration-200 flex items-start gap-3 ${optionClass}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-slate-800 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1 leading-relaxed">{option}</span>
                  {isAnswered && idx === q.correctAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== q.correctAnswer && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Answer Explanation */}
          {isAnswered && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 animate-fadeIn">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-amber-400">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                Examiner's Explanation & Strategy
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {q.explanation}
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={handleNext}
                  className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-100 text-xs font-mono font-bold transition-colors"
                >
                  {currentIdx + 1 < questions.length ? "Next Trap →" : "View Final Results →"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
