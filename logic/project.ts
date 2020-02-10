// @ts-ignore
interface Feature {
    name: string;
    difficult: number; // range between <0 - 1]
    costByHour: number;
    duration: number;
}

interface ProjectDescription {
    startDate: Date;
    endDate: Date;
    duration: number;

    features: Feature[];
    ideationDuration: number;
    developDuration: number;
    developmentGap: number;
    totalCost: number;
}

class Project {
    name: string;
    startDate: Date = new Date(Date.now());
    duration: number = 10;

    definition: number = 5;
    prioritization: number = 1;
    flows: number = 4;
    branding: number = 3;
    wireframes: number = 5;
    mockups: number = 4;

    features: Feature[];

    monthCost: number = 600; // USD 600
    developmentGap: number = 30; // 30 days
    difficultOffset: number = 0.5; // 0.5 -> medium

    constructor(name, startDate?: Date, duration?: number) {
        this.name = name;
        this.features = [];
        if (startDate) {
            this.startDate = startDate;
        }

        if (duration) {
            this.duration = duration;
        }
    }

    ideationDuration(): number {
        return this.definition + this.prioritization + this.flows + this.branding + this.wireframes + this.mockups;
    }

    addFeature(name: string, costByHour: number, duration: number, difficult: number = this.difficultOffset) {
        this.features?.push(<Feature>{
            name: name,
            costByHour: costByHour,
            duration: duration,
            difficult: difficult
        });
    }

    deleteFeature(name: string) {
        this.features = this.features.filter(f => f.name != name)
    }

    _featureCost(index: number = 0): number {
        const feature = this.features[index];
        const plainCost = feature.costByHour * feature.duration;
        const multiplier = 1 + (feature.difficult - this.difficultOffset);

        return plainCost * multiplier;
    }

    developmentDuration(): number {
        let totalTime: number = 0;
        this.features.map((f: Feature) => (totalTime += f.duration));
        return totalTime;
    }

    totalCost(): number {
        if (this.features.length == 0) {
            return 0;
        }

        let totalCost: number = 0;
        for (let i = 0; i < this.features.length; i++) {
            totalCost += this._featureCost(i);
        }

        const payedDuration = this.monthCost * (this.ideationDuration() + this.developmentDuration());
        return totalCost - payedDuration;
    }

    describe(): ProjectDescription {
        let endDate = new Date(this.startDate);
        endDate.setDate(endDate.getDate() + this.ideationDuration() + this.developmentGap + this.developmentDuration());

        return <ProjectDescription>{
            features: this.features,
            developDuration: this.developmentDuration(),
            developmentGap: this.developmentGap,
            duration: this.duration,
            endDate: endDate,
            ideationDuration: this.ideationDuration(),
            startDate: this.startDate,
            totalCost: this.totalCost()
        }
    }
}

export {Project}