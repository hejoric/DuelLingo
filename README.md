# ⚔️ Duellingo
*A multiplayer language learning game built with Java.*

## Overview
Duellingo is a gamified language learning platform where players compete in real-time quizzes and minigames. It combines **Anki-style spaced repetition**, **Duolingo-style streaks**, and **multiplayer fun** inspired by Jackbox, Quizlet Live, and Typing of the Dead.  

This project demonstrates skills in **Java networking, OOP design, concurrency, and secure client-server programming**.

## 🚀 Features
- 🔗 **Multiplayer Duels:** Real-time socket communication between players
- 📚 **Flashcard Decks:** Vocabulary & grammar practice
- 🔁 **Spaced Repetition:** SRS-based memory reinforcement
- 🎮 **Minigames:** Timed multiple-choice, typing battles, and challenge modes
- 🏆 **Progression:** XP, streaks, leaderboards, and ranks
- 🔒 **Secure Communication:** Encrypted socket connections + hashed credentials

## 🛠 Tech Stack
- Java 17+
- JavaFX / LibGDX (GUI and minigames)
- TCP/UDP sockets (multiplayer networking)
- PostgreSQL/MySQL (user data + spaced repetition scheduling)
- Maven (build automation)

## 🏗 Project Structure
  duellingo/
├── server/ # Multiplayer game server
├── client/ # Client-side logic & UI
├── models/ # User, Deck, Question, GameSession
├── services/ # Spaced repetition + scoring
├── utils/ # Encryption, helpers
└── README.md

## 🧭 Roadmap
- [ ] Build client-server architecture
- [ ] Implement flashcard-based quiz engine
- [ ] Add multiplayer duel logic
- [ ] Create minigames (typing, timed challenges)
- [ ] Secure login/auth system
- [ ] GUI polish (JavaFX animations)

## 💼 Career Impact
Showcases:
- Strong Java skills (OOP, sockets, concurrency)
- Experience with multiplayer logic & game design
- Ability to blend education + gamification

## 📜 License
MIT
