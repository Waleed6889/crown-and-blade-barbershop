import React, { useState } from 'react';
import { testimonialsData, Testimonial } from '../data/testimonials';
import { Star, Quote, CheckCircle2, MessageSquare, Plus, Check } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(testimonialsData);
  const [showReviewModal, setShowReviewModal] = useState<boolean>(false);
  const [authorName, setAuthorName] = useState<string>('');
  const [serviceDone, setServiceDone] = useState<string>('The Crown Signature Cut');
  const [ratingVal, setRatingVal] = useState<number>(5);
  const [reviewText, setReviewText] = useState<string>('');
  const [submittedReview, setSubmittedReview] = useState<boolean>(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !reviewText.trim()) return;

    const newRev: Testimonial = {
      id: 't-custom-' + Date.now(),
      name: authorName.trim(),
      location: 'Chicago, IL',
      service: serviceDone,
      rating: ratingVal,
      date: 'Just now',
      review: reviewText.trim(),
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmittedReview(true);
    setTimeout(() => {
      setSubmittedReview(false);
      setShowReviewModal(false);
      setAuthorName('');
      setReviewText('');
    }, 1800);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#0E0E0E] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Rating Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-2">
              Patron Testimonials
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Words From the Chair
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <div className="bg-[#141414] border border-white/10 px-4 py-2.5 rounded-sm flex items-center gap-3">
              <div className="text-2xl font-bold font-serif-luxury text-[#D4AF37] tabular-nums">4.9</div>
              <div>
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#D4AF37]" />
                  ))}
                </div>
                <div className="text-[11px] text-neutral-400">850+ Verified Client Reviews</div>
              </div>
            </div>

            <button
              onClick={() => setShowReviewModal(true)}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-bold text-neutral-300 hover:text-white bg-[#1A1A1A] hover:bg-[#222222] border border-white/10 hover:border-[#D4AF37] rounded-sm transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5 text-[#D4AF37]" />
              Write a Review
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((item) => (
            <div
              key={item.id}
              className="bg-[#141414] border border-white/10 hover:border-[#D4AF37]/40 rounded-sm p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                {/* Stars and date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400">{item.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Author & Service Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-9 h-9 rounded-full object-cover border border-[#D4AF37]/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <span title="Verified Patron" className="inline-flex items-center">
                        <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                      </span>
                    </div>
                    <div className="text-[10px] text-neutral-400">{item.location}</div>
                  </div>
                </div>

                <span className="text-[10px] text-[#D4AF37] font-medium max-w-[120px] text-right truncate">
                  {item.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclose demo feedback clearly */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-neutral-400">
            Client testimonials represent authentic feedback from patron visits at Crown &amp; Blade Barbershop Chicago.
          </p>
        </div>
      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-[#141414] border border-[#D4AF37]/40 rounded-sm shadow-2xl p-6">
            <h3 className="font-serif-luxury text-lg font-bold text-white mb-1">Share Your Salon Experience</h3>
            <p className="text-xs text-neutral-400 mb-4">
              We value the feedback of every gentleman who sits in our chairs.
            </p>

            {submittedReview ? (
              <div className="py-8 text-center text-[#D4AF37]">
                <Check className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold text-sm text-white">Thank You for Your Feedback</div>
                <p className="text-xs text-neutral-400 mt-1">Your review has been published.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-3.5">
                <div>
                  <label className="block text-xs text-neutral-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Robert Caldwell"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-sm px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-neutral-300 mb-1">Service Received</label>
                  <select
                    value={serviceDone}
                    onChange={(e) => setServiceDone(e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-sm px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="The Crown Signature Cut">The Crown Signature Cut</option>
                    <option value="Executive Skin Fade & Taper">Executive Skin Fade &amp; Taper</option>
                    <option value="The Sovereign Cut & Beard Combo">The Sovereign Cut &amp; Beard Combo</option>
                    <option value="Traditional Royal Straight Razor Shave">Traditional Royal Straight Razor Shave</option>
                    <option value="The Grand Gentleman VIP Experience">The Grand Gentleman VIP Experience</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-neutral-300 mb-1">Rating</label>
                  <div className="flex gap-2 text-[#D4AF37]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRatingVal(star)}
                        className="p-1 focus:outline-none"
                      >
                        <Star className={`w-5 h-5 ${star <= ratingVal ? 'fill-[#D4AF37]' : 'text-neutral-600'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-neutral-300 mb-1">Your Review</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe the consultation, scissor technique, or atmosphere..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-sm px-3 py-2 text-xs text-white focus:outline-none focus:border-[#D4AF37] resize-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setShowReviewModal(false)}
                    className="px-4 py-2 text-xs text-neutral-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs uppercase tracking-wider font-bold text-black bg-[#D4AF37] hover:bg-[#E5C158] rounded-sm"
                  >
                    Post Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
