"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeRefactor1652890398969 = void 0;
class CoffeeRefactor1652890398969 {
    async up(queryRunner) {
        await queryRunner.query('ALTER TABLE "coffee" RENAME COLUMN "name" TO "title"');
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "coffee" RENAME COLUMN "title" TO "name"`);
    }
}
exports.CoffeeRefactor1652890398969 = CoffeeRefactor1652890398969;
//# sourceMappingURL=1652890398969-CoffeeRefactor.js.map