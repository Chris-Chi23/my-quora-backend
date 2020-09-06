import fs from 'fs';
import Application from 'koa';

export const useRouting = (app: Application) => {
    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.ts') return;
        useMiddlewares(app, file);
    });
};

async function useMiddlewares(app: Application, file: string){
    const route = await import(`./${file}`);
    app.use(route.routes()).use(route.allowedMethods());
}