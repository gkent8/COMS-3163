export interface Quiz {
    id: number;
    question: string; 
    type: string;
    answers: string[];
    correctAnswer: number[];
}
