class GroupAnalyzer {
    constructor() {
        this.groups = [
            { code: 'A', d1: 10, d2: 5 },
            { code: 'B', d1: 4, d2: 8 },
            { code: 'C', d1: 2, d2: 6 },
            { code: 'D', d1: 3, d2: 9 },
            { code: 'E', d1: 1, d2: 5 }
        ];
    }

    calculateAverages() {
        this.groups.forEach(group => {
            group.d3 = (group.d1 + group.d2) / 2;
            group.average = (group.d1 + group.d2 + group.d3) / 3;
        });
    }

    findBestGroup() {
        return this.groups.reduce((prev, current) => 
            prev.average > current.average ? prev : current
        );
    }

    analyzeGroups() {
        this.calculateAverages();
        const bestGroup = this.findBestGroup();

        this.groups.forEach(group => {
            console.log(`El grupo ${group.code} tiene un promedio de ${(group.average).toFixed(2)}`);
        });
        console.log(`\nEl grupo con el mayor promedio es: ${bestGroup.code} con ${(bestGroup.average).toFixed(2)}`);
    }
}


const analyzer = new GroupAnalyzer();
analyzer.analyzeGroups();
