#import "NativeNavigator.h"
#import <Cordova/CDV.h>

@implementation NativeNavigator

- (void)transition:(CDVInvokedUrlCommand*)command
{
    NSLog(@"*****Inside NativeNavigator*****");
    BOOL forward = [[command.arguments objectAtIndex:0] boolValue];
    if (forward) {
        [UIView transitionWithView:self.viewController.view duration:0.7
                           options:UIViewAnimationOptionTransitionFlipFromLeft
                        animations:^{}
                        completion:^(BOOL finished) {}
         ];
    } else {
        [UIView transitionWithView:self.viewController.view duration:0.7
                           options:UIViewAnimationOptionTransitionFlipFromRight
                        animations:^{}
                        completion:^(BOOL finished) {}
         ];
    }
}

@end
