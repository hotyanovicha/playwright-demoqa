import { faker } from '@faker-js/faker';

export interface TextBoxData {
    fullName: string;
    email: string;
    currentAddress: string;
    permanentAddress: string;
}

export class TextBoxDataGenerator {
    // Generate test data with optional field overrides
    static create(overrides: Partial<TextBoxData> = {}): TextBoxData {
        return {
            fullName: faker.person.fullName(),
            email: faker.internet.email(),
            currentAddress: faker.location.streetAddress(),
            permanentAddress: faker.location.streetAddress(),
            ...overrides  // Override any specific fields
        };
    }
}
