
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface Message {
    id: number;
    description: string;
}

export interface IMutation {
    createMessage(description: string): Message | Promise<Message>;
}

export interface IQuery {
    messages(): Message[] | Promise<Message[]>;
}
