interface Feature {
    name: string;
    dificult: number; // range between <0 - 1]
    costByHour: number;
    duration: number;
}

class Project {
    startDate: Date = new Date(Date.now());
    duration: number = 10;

    definition: number = 5;
    priorization: number = 1;
    flows: number = 4;
    branding: number = 3;
    wireframes: number = 5;
    mockups: number = 4;

    features: [Feature];

    monthCost: number = 600; // USD 600
    developmentGap: number = 30; // 30 days
    dificultOffset: number = 0.5; // 0.5 -> medium

    constructor(startDate?: Date, duration?: number) {
        if (startDate) {
            this.startDate = startDate;
        }

        if (duration) {
            this.duration = duration;
        }
    }

    ideationDuration(): number {
        return this.definition + this.priorization + this.flows + this.branding + this.wireframes + this.mockups;
    }

    addFeature(name: string, costByHour: number, duration: number, dificult: number = this.dificultOffset) {
        this.features?.push(<Feature>{
            name: name,
            costByHour: costByHour,
            duration: duration,
            dificult: dificult
        });
    }

    _featureCost(index: number = 0): number {
        const feature = this.features[index];
        const plainCost = feature.costByHour * feature.duration;
        const multiplier = 1 + (feature.dificult - this.dificultOffset);

        return plainCost * multiplier;
    }

    totalDevelopmentTime(): number {
        var totalTime: number = 0;
        this.features.map((f: Feature) => (totalTime += f.duration));
        return totalTime;
    }

    totalCost(): number {
        var totalCost: number = 0;
        for (var i = 0; i < this.features.length; i++) {
            totalCost += this._featureCost(i);
        }
        return totalCost;
    }
}
