export const twiceAsOld = (dadYearsOld: number, sonYearsOld: number) => {
    if (dadYearsOld >= sonYearsOld * 2) return dadYearsOld - sonYearsOld * 2;
    else return sonYearsOld * 2 - dadYearsOld;
};
