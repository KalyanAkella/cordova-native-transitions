#import "NativeNavigator.h"
#import <Cordova/CDV.h>

@implementation NativeNavigator

- (void)transition:(CDVInvokedUrlCommand*)command
{
    NSLog(@"*****Inside NativeNavigator*****");
    [UIView transitionWithView:self.viewController.view duration:0.7
        options:UIViewAnimationOptionTransitionFlipFromLeft
        animations:^{}
        completion:^(BOOL finished) {}
    ];
}

@end
