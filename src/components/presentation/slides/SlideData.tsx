import { motion } from "framer-motion";
import { CountingNumber, fadeUpVariants, staggerContainer } from "@/components/presentation/AnimatedElements";

const data = [
  { month: "10월", revenue: 137, profit: 1567, rate: 11 },
  { month: "11월", revenue: 171, profit: 2707, rate: 16 },
  { month: "12월", revenue: 408, profit: 6440, rate: 16, highlight: true },
];

export const SlideData = () => {
  const maxProfit = Math.max(...data.map((d) => d.profit));

  return (
    <div className="slide slide-left">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-5xl w-full"
      >
        <motion.h1 
          variants={fadeUpVariants}
          className="text-headline mb-12"
        >
          솔직히, 운이 좋았습니다.
        </motion.h1>

        {/* Data visualization as horizontal bars */}
        <div className="space-y-6 mb-12">
          {data.map((row, index) => (
            <motion.div
              key={row.month}
              variants={fadeUpVariants}
              custom={index * 0.15 + 0.3}
              initial="hidden"
              animate="visible"
              className={`grid grid-cols-12 items-center gap-4 p-4 rounded-xl ${
                row.highlight 
                  ? "bg-primary/10 border border-primary/30" 
                  : "bg-secondary/30"
              }`}
            >
              <div className="col-span-2 md:col-span-1">
                <span className={`text-lg font-bold ${row.highlight ? "text-primary" : "text-foreground"}`}>
                  {row.month}
                </span>
              </div>
              
              <div className="col-span-10 md:col-span-5">
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-8 bg-muted/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(row.profit / maxProfit) * 100}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2, ease: "easeOut" }}
                      className={`h-full rounded-full ${
                        row.highlight 
                          ? "bg-gradient-to-r from-primary to-primary/70" 
                          : "bg-muted-foreground/50"
                      }`}
                      style={row.highlight ? {
                        boxShadow: "0 0 20px hsl(var(--primary) / 0.4)"
                      } : {}}
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-12 md:col-span-6 grid grid-cols-3 gap-4 mt-2 md:mt-0">
                <div className="text-center md:text-left">
                  <p className="text-xs text-muted-foreground mb-1">매출</p>
                  <p className="text-lg font-semibold">
                    <CountingNumber value={row.revenue / 100} suffix="억" formatNumber={false} />
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-xs text-muted-foreground mb-1">매출총이익</p>
                  <p className={`text-lg font-bold ${row.highlight ? "text-primary" : ""}`}>
                    <CountingNumber value={row.profit} suffix="만" />
                  </p>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-xs text-muted-foreground mb-1">이익률</p>
                  <p className="text-lg font-semibold">
                    <CountingNumber value={row.rate} suffix="%" formatNumber={false} />
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={fadeUpVariants}
          custom={1}
          initial="hidden"
          animate="visible"
          className="text-subtitle font-bold"
        >
          피부미용 본격 판매 → 이익률{" "}
          <span className="text-primary">11%에서 16%로</span>
        </motion.p>
      </motion.div>
    </div>
  );
};
