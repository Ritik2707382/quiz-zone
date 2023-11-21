import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
	const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
	return (
		<main>
			<section className="quiz quiz-small">
				<form className="setup-form">
					<div className="title">QuizTime</div>
					{/* amount */}
					<div className="form-control">
						<label htmlFor="amount">number of questions</label>
						<input
							type="number"
							className="form-input"
							name="amount"
							id="amount"
							value={quiz.amount}
							onChange={handleChange}
							min={1}
							max={50}
						/>
					</div>
					{/* category */}
					<div className="form-control">
						<label htmlFor="category">category</label>
						<select
							name="category"
							id="category"
							className="form-input"
							value={quiz.category}
							onChange={handleChange}
						>
							<option value="sports">Sports</option>
							<option value="history">History</option>
							<option value="generalKnowledge">General Knowledge</option>
							<option value="politics">Politics</option>
							<option value="mythology">Mythology</option>
							<option value="geography">Geography</option>
							<option value="history">History</option>
							<option value="celebrities">Celebrities</option>
							<option value="animals">Animals</option>
							<option value="vehicles">Vehicles</option>
							<option value="entertainmentBooks">Entertainment: Books</option>
							<option value="entertainmentFilm">Entertainment: Film</option>
							<option value="entertainmentMusic">Entertainment: Music</option>
							<option value="entertainmentTelevision">
								Entertainment: Television
							</option>
							<option value="entertainmentVideoGames">
								Entertainment: Video Games
							</option>
							<option value="entertainmentAnime">
								Entertainment: Japanese Anime & Manga
							</option>
							<option value="entertainmentCartoon">
								Entertainment: Cartoon & Animations
							</option>
							<option value="scienceAndNature">Science & Nature</option>
							<option value="scienceComputers">Science: Computers</option>
							<option value="scienceMathematics">Science: Mathematics</option>
						</select>
					</div>
					{/* difficulty */}
					<div className="form-control">
						<label htmlFor="difficulty">select difficulty</label>
						<select
							name="difficulty"
							id="difficulty"
							value={quiz.difficulty}
							onChange={handleChange}
							className="form-input"
						>
							<option value="easy">Easy</option>
							<option value="medium">Medium</option>
							<option value="hard">Hard</option>
						</select>
					</div>
					{error && (
						<p className="error">
							can't generate questions, please try different options
						</p>
					)}
					<button type="submit" onClick={handleSubmit} className="submit-btn">
						start
					</button>
				</form>
			</section>
		</main>
	);
};

export default SetupForm;
